import { Clothes } from "./app/shared/models/Clothes";
import { Tag } from "./app/shared/models/Tag";

export const sample_clothes: Clothes[] = [
    {
      id: '1',
      name: 'Denim Jacket',
      price: 50,
      brand: 'Levi\'s',
      sizes: ['S', 'M', 'L', 'XL'],
      material: 'Denim',
      color: 'Blue',
      favorite: false,
      stars: 4.2,
      imageUrl: 'assets/clothes-1.jpg',
      tags: ['Jacket', 'Denim', 'Casual'],
    },
    {
      id: '2',
      name: 'Striped T-shirt',
      price: 15,
      brand: 'H&M',
      sizes: ['XS', 'S', 'M'],
      material: 'Cotton',
      color: 'White',
      favorite: true,
      stars: 4.5,
      imageUrl: 'assets/clothes-2.jpg',
      tags: ['T-shirt', 'Striped', 'Casual'],
    },
    {
      id: '3',
      name: 'Leather Boots',
      price: 120,
      brand: 'Dr. Martens',
      sizes: ['US 7', 'US 8', 'US 9', 'US 10'],
      material: 'Leather',
      color: 'Black',
      favorite: false,
      stars: 4.7,
      imageUrl: 'assets/clothes-3.jpg',
      tags: ['Boots', 'Leather', 'Footwear'],
    },
    {
      id: '4',
      name: 'Summer Dress',
      price: 40,
      brand: 'Zara',
      sizes: ['XS', 'S', 'M', 'L'],
      material: 'Cotton',
      color: 'Yellow',
      favorite: true,
      stars: 4.0,
      imageUrl: 'assets/clothes-4.jpg',
      tags: ['Dress', 'Summer', 'Casual'],
    },
    {
      id: '5',
      name: 'Sports Leggings',
      price: 25,
      brand: 'Nike',
      sizes: ['XS', 'S', 'M', 'L'],
      material: 'Polyester',
      color: 'Black',
      favorite: false,
      stars: 4.2,
      imageUrl: 'assets/clothes-5.jpg',
      tags: ['Leggings', 'Sports', 'Athletic'],
    },
    {
      id: '6',
      name: 'Winter Scarf',
      price: 20,
      brand: 'Uniqlo',
      sizes: ['One Size'],
      material: 'Wool',
      color: 'Red',
      favorite: false,
      stars: 3.8,
      imageUrl: 'assets/clothes-6.jpg',
      tags: ['Scarf', 'Winter', 'Accessories'],
    },
  ];
  
  export const sample_tags: Tag[] = [
    { name: 'All', count: 6 },
    { name: 'Jacket', count: 1 },
    { name: 'Denim', count: 1 },
    { name: 'Casual', count: 3 },
    { name: 'T-shirt', count: 1 },
    { name: 'Striped', count: 1 },
    { name: 'Boots', count: 1 },
    { name: 'Leather', count: 1 },
    { name: 'Footwear', count: 1 },
    { name: 'Dress', count: 1 },
    { name: 'Summer', count: 1 },
    { name: 'Leggings', count: 1 },
    { name: 'Sports', count: 1 },
    { name: 'Athletic', count: 1 },
    { name: 'Scarf', count: 1 },
    { name: 'Winter', count: 1 },
    { name: 'Accessories', count: 1 },
  ];
  