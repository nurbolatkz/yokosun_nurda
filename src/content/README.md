# YokoSun Content Structure

This folder contains all the content data for the YokoSun website, organized for easy management and updates.

## Folder Structure

```
/content/
├── data/           # Data files with structured content
├── texts/          # Text content and translations
├── images/         # Image assets (ready for future use)
└── components/     # Reusable content components
```

## Data Files

### `/data/products.js`
- Product catalog with prices, sizes, and features
- Each product includes: id, name, image, category, sizes, features
- Easy to add new products or update existing ones

### `/data/offers.js`
- Promotional offers and discount codes
- Promo code validation logic
- Easy to add seasonal promotions

### `/data/testimonials.js`
- Customer reviews and ratings
- Trust statistics and metrics
- Verified customer data

### `/data/companyInfo.js`
- Company contact information
- Working hours and locations
- Video content configuration
- Available cities for delivery

## Text Content

### `/texts/siteTexts.js`
- All website text content in Russian
- Organized by sections (header, hero, features, etc.)
- Easy to translate to other languages
- Form labels and error messages

## How to Use

### Adding New Products
```javascript
// In /data/products.js
{
  id: 11,
  name: "New Product Name",
  image: "path/to/image.jpg",
  category: "Category",
  sizes: [
    { size: "Size", price: 0000, pieces: 00 }
  ],
  features: ["Feature 1", "Feature 2"]
}
```

### Adding New Offers
```javascript
// In /data/offers.js
{
  id: 4,
  title: "New Offer Title",
  description: "Description",
  code: "PROMO_CODE",
  validUntil: "Date",
  color: "from-color to-color",
  discount: 0.15 // 15% discount
}
```

### Updating Text Content
```javascript
// In /texts/siteTexts.js
// Simply update any text property
hero: {
  mainTitle: "Updated Title"
}
```

## Integration

Components import content like this:
```javascript
import { productsData } from '../content/data/products';
import { siteTexts } from '../content/texts/siteTexts';
```

## Benefits

1. **Easy Content Management**: All content in organized files
2. **Maintainable**: Clear separation of data and presentation
3. **Translatable**: Ready for multi-language support
4. **Version Control**: Track content changes easily
5. **Reusable**: Content can be shared across components
6. **Type Safe**: Easy to add TypeScript definitions later

## Future Enhancements

- Add TypeScript interfaces for type safety
- Create content management dashboard
- Add multi-language support
- Implement content versioning
- Add image optimization pipeline