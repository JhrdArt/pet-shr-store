export interface Product {
    uuid: string
    id: string
    productName: string
    productTag: any
    productType: string
    brand: string
    itemCategory: string
    step: number
    ean: string
    productWeight: number
    showProductWeight: boolean
    price: Price
    renderedPrice: string
    images: Images
    selectedQuantity: number
    minOrderQuantity: number
    maxOrderQuantity: number
    variationAttributes: VariationAttribute[]
    longDescription: string
    shortDescription: string
    rating: number
    promotions: Promotion[]
    quantities: number
    availability: Availability
    available: boolean
    selectedProductUrl: string
    readyToOrder: boolean
    online: boolean
    pageTitle: any
    pageDescription: any
    pageKeywords: any
    template: any
  }

  type PriceType = "range"
  
  export interface Price {
    type?: PriceType
    sales: Sales
    list?: List
    html: string
    max?: {
        sales: Sales
        list?: List
    },
    min?: {
        sales: Sales
        list?: List
    }
  }
  
  export interface Sales {
    value: number
    currency: string
    formatted: string
    decimalPrice: string
  }
  
  export interface List {
    value: number
    currency: string
    formatted: string
    decimalPrice: string
  }
  
  export interface Images {
    large: Large[]
    small: Small[]
  }
  
  export interface Large {
    alt: string
    url: string
    title: string
  }
  
  export interface Small {
    alt: string
    url: string
    title: string
  }
  
  export interface VariationAttribute {
    attributeId: string
    displayName: string
    id: string
    swatchable: boolean
    displayValue: string
    values: ValueVariation[]
    resetUrl: string
  }
  
  export interface ValueVariation {
    id: string
    description: any
    displayValue: string
    value: string
    selected: boolean
    selectable: boolean
    url: string
    price?: number
  }
  
  export interface Promotion {
    calloutMsg: string
    details: string
    enabled: boolean
    id: string
    name: string
    promotionClass: string
    rank: number
  }
  
  export interface Availability {
    messages: string[]
    inStockDate: any
  }
  

  export interface ProductForCartShop {
    productName: string,
    selectedQuantity: number,
    price: PriceForCart,
    brand: string,
    id: string,
    productWeight?: string,
    available: boolean,
    images: Images,
    promotion?: string
    itemCategory: string
    variant?: ValueVariation
  }

  export interface PriceForCart {
    salesPrice: {
      formatted: string,
      value: number
    },
    listPrice?: {
      formatted: string,
      value: number
    },
  }

export enum TypePickUp {
  DELIVERY= "delivery",
  STORE= "store"
}

export interface User {
  name: string
  lastName: string,
  phoneNumber: string,
  address?: string,
  department?: string,
  province?: string,
  district?: string
}

export interface CheckoutData {
  id: string
  user: User,
  dateDelivery?: string,
  deliveryCompany?: string,
  addressStore?: string,
}


export interface CheckOutDetailsTypes {
  type: TypePickUp
  data: CheckoutData
}

// ! INTERFACE DE SECTIONDATA

interface Image {
  src: string;
  alt: string;
}

interface Category {
  to: string;
  label: string;
  img: Image;
}

interface ProductsList {
  title: string;
}

interface FoodDescription {
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
  paragraph5: string;
}

interface CareDescription {
  paragraph1: string;
}

interface AccessoriesDescription {
  paragraph1: string;
}

interface Food {
  title: string;
  description: FoodDescription;
}

interface Care {
  title: string;
  description: CareDescription;
}

interface Accessories {
  title: string;
  description: AccessoriesDescription;
}

interface LongDescription {
  introduction: string;
  food: Food;
  care: Care;
  accessories: Accessories;
}

export interface SectionData {
  banner: Image;
  listCategories: Category[];
  productsList: ProductsList;
  longDescription: LongDescription;
}