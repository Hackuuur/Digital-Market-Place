export const PRODUCT_CATEGORIES = [
    {
        label:'UI KITS',
        value:'ui_kits' as const,
        featured:[
            {
                name:'editor picks',
                href:'#',
                imagesrc:'/nav/ui-kits/mixed.jpg'
            },
            {
                name:'New Arrivals',
                href:'#',
                imagesrc:'/nav/ui-kits/blue.jpg'
            },
            {
                name:'Best Seller',
                href:'#',
                imagesrc:'/nav/ui-kits/purple.jpg'
            },

        ] 
    },
    {
        label:'ICONS',
        value:'icons' as const,
        featured:[
            {
                name:'Favorite Icon picks',
                href:'#',
                imagesrc:'/nav/icons/picks.jpg'
            },
            {
                name:'New Arrivals',
                href:'#',
                imagesrc:'/nav/icons/new.jpg'
            },
            {
                name:'BestSelling Icons',
                href:'#',
                imagesrc:'/nav/icons/bestsellers.jpg'
            },

        ] 
    }
]