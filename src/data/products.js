export const TYPES = ['Tablet', 'Capsule', 'Syrup', 'Gel', 'Powder', 'Injection', 'Ointment', 'Drops', 'Device'];

export const SEED_PRODUCTS = [
  { id: 1, name: 'Paracetamol 500 mg', note: 'Strip of 15 tablets', cat: 'Pain & Fever', type: 'Tablet', comp: 'Paracetamol 500 mg', price: 2.5, stock: 120, rx: false, image: '/images/paracetamol.jpg' },
  { id: 2, name: 'Ibuprofen 400 mg', note: 'Strip of 10 tablets', cat: 'Pain & Fever', type: 'Tablet', comp: 'Ibuprofen 400 mg', price: 3.2, stock: 80, rx: false, image: '/images/ibuprofen.jpg' },
  { id: 3, name: 'Cough Syrup, Honey & Ginger', note: '100 ml bottle', cat: 'Cold & Cough', type: 'Syrup', comp: 'Honey 20 mg, ginger extract 15 mg per 5 ml', price: 4.8, stock: 45, rx: false, image: '/images/cough-syrup.jpg' },
  { id: 4, name: 'Cetirizine 10 mg', note: 'Strip of 10 tablets', cat: 'Cold & Cough', type: 'Tablet', comp: 'Cetirizine hydrochloride 10 mg', price: 2.1, stock: 150, rx: false, image: '/images/cetirizine.jpg' },
  { id: 5, name: 'ORS Electrolyte Powder', note: 'Box of 10 sachets', cat: 'Digestive', type: 'Powder', comp: 'Sodium chloride, glucose, potassium chloride, sodium citrate', price: 5.5, stock: 60, rx: false, image: '/images/ors.jpg' },
  { id: 6, name: 'Antacid Gel', note: '170 ml bottle', cat: 'Digestive', type: 'Gel', comp: 'Aluminium hydroxide 200 mg, magnesium hydroxide 200 mg per 5 ml', price: 3.9, stock: 18, rx: false, image: '/images/antacid-gel.jpg' },
  { id: 7, name: 'Vitamin D3 60K', note: 'Pack of 4 capsules', cat: 'Vitamins', type: 'Capsule', comp: 'Cholecalciferol 60,000 IU', price: 6.4, stock: 70, rx: false, image: '/images/vitamin-d3.jpg' },
  { id: 8, name: 'Multivitamin Daily', note: 'Bottle of 60 tablets', cat: 'Vitamins', type: 'Tablet', comp: 'Vitamins A, B-complex, C, D, E; zinc; selenium', price: 11.9, stock: 40, rx: false, image: '/images/multivitamin.jpg' },
  { id: 9, name: 'Digital Thermometer', note: 'Flexible tip, 10 s read', cat: 'Devices', type: 'Device', comp: '—', price: 7.5, stock: 25, rx: false, image: '/images/thermometer.jpg' },
  { id: 10, name: 'Blood Pressure Monitor', note: 'Upper-arm, memory for 90 readings', cat: 'Devices', type: 'Device', comp: '—', price: 34, stock: 8, rx: false, image: '/images/bp-monitor.jpg' },
  { id: 11, name: 'Amoxicillin 500 mg', note: 'Strip of 10 capsules', cat: 'Prescription', type: 'Capsule', comp: 'Amoxicillin trihydrate 500 mg', price: 6.8, stock: 90, rx: true, image: '/images/amoxicillin.jpg' },
  { id: 12, name: 'Metformin 500 mg', note: 'Strip of 20 tablets', cat: 'Prescription', type: 'Tablet', comp: 'Metformin hydrochloride 500 mg', price: 3.6, stock: 110, rx: true, image: '/images/metformin.jpg' },
];