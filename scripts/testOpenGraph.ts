import { SCENARIOS } from '../src/data/scenarios';
import { generateMetadata } from '../src/app/scenarii/[category]/[slug]/page';
import ogImageHandler, { size, contentType, alt } from '../src/app/scenarii/[category]/[slug]/opengraph-image';

async function testAllMetadataAndOG() {
  console.log('====================================================');
  console.log('WHATIF INSURANCE — OPEN GRAPH & SEO METADATA AUDIT');
  console.log('====================================================\n');

  console.log(`1. OG Config Exports:`);
  console.log(`- Dimensions: ${size.width} × ${size.height} (Target: 1200 × 630) -> ${size.width === 1200 && size.height === 630 ? 'PASS' : 'FAIL'}`);
  console.log(`- MIME type: "${contentType}" (Target: "image/png") -> ${contentType === 'image/png' ? 'PASS' : 'FAIL'}`);
  console.log(`- Default Alt: "${alt}"\n`);

  let metadataSuccess = 0;
  let metadataErrors = 0;

  for (let i = 0; i < SCENARIOS.length; i++) {
    const s = SCENARIOS[i];
    try {
      const meta = await generateMetadata({ params: { category: s.categoryId, slug: s.slug } });
      
      const hasValidTitle = !!meta.title && typeof meta.title === 'string' && meta.title.includes('WHATIF');
      const hasValidDesc = !!meta.description && meta.description.length > 50;
      const og = meta.openGraph as any;
      const tw = meta.twitter as any;

      const isOgAbsolute = og?.url?.startsWith('https://whatifinsurance.cristianvaduva.com');
      const isOgImageAbsolute = og?.images?.[0]?.url?.startsWith('https://');
      const isTwCardValid = tw?.card === 'summary_large_image';
      const isTwImageAbsolute = tw?.images?.[0]?.startsWith('https://');

      if (hasValidTitle && hasValidDesc && isOgAbsolute && isOgImageAbsolute && isTwCardValid && isTwImageAbsolute) {
        metadataSuccess++;
      } else {
        metadataErrors++;
        console.error(`Metadata issue for scenario: ${s.id}`, {
          hasValidTitle,
          hasValidDesc,
          isOgAbsolute,
          isOgImageAbsolute,
          isTwCardValid,
          isTwImageAbsolute
        });
      }
    } catch (e) {
      metadataErrors++;
      console.error(`Exception generating metadata for ${s.id}:`, e);
    }
  }

  console.log(`2. Scenarios Metadata Validation:`);
  console.log(`- Total Checked: ${SCENARIOS.length}`);
  console.log(`- Perfectly Valid Metadata (OG + Twitter + Absolute URLs): ${metadataSuccess} / ${SCENARIOS.length}`);
  console.log(`- Errors: ${metadataErrors}\n`);

  console.log('3. Testing next/og ImageResponse Generation for Representative Scenarios:');
  const sampleSlugs = [
    { cat: 'casa', slug: 'teava-sparta' },
    { cat: 'auto', slug: 'parbriz-crapat-autostrada' },
    { cat: 'calatorii', slug: 'bagaj-pierdut-intarziat-destinatie' },
    { cat: 'digital-tech', slug: 'laptop-furat-calatorie-date-sensibile' }
  ];

  for (const item of sampleSlugs) {
    try {
      const response = await ogImageHandler({ params: { category: item.cat, slug: item.slug } });
      const status = response.status;
      const headers = response.headers;
      const resContentType = headers.get('content-type');
      console.log(`- Scenario "${item.slug}": HTTP Status ${status}, Content-Type: ${resContentType}`);
      if (status !== 200 || !resContentType?.includes('image/png')) {
        console.error(`FAILED OG Image for ${item.slug}`);
      }
    } catch (err: any) {
      console.error(`Exception rendering OG Image for ${item.slug}:`, err.message);
    }
  }

  console.log('\n====================================================');
  console.log('OPEN GRAPH AUDIT COMPLETED');
  console.log('====================================================');
}

testAllMetadataAndOG();
