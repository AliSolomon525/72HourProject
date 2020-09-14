    export interface Location {
        entity_type: String;
        entity_id: Number;
        title: String;
        latitude: String;
        longitude: String;
        city_id: Number;
        city_name: String;
        country_id: Number;
        country_name: String;
    }

    export interface Popularity {
        popularity: String;
        nightlife_index: String;
        nearby_res: String[];
        top_cuisines: String[];
        popularity_res: String;
        nightlife_res: String;
        subzone: String;
        subzone_id: number;
        city: String;
    }

    export interface HasMenuStatus {
        delivery: number;
        takeaway: number;
    }

    export interface R {
        has_menu_status: HasMenuStatus;
        res_id: number;
        is_grocery_store: boolean;
    }

    export interface Location2 {
        address: String;
        locality: String;
        city: String;
        city_id: Number;
        latitude: String;
        longitude: String;
        zipcode: String;
        country_id: number;
        locality_verbose: String;
    }

    export interface Title {
        text: String;
    }

    export interface BgColor {
        type: String;
        tint: String;
    }

    export interface RatingObj {
        title: Title;
        bg_color: BgColor;
    }

    export interface UserRating {
        aggregate_rating: any;
        rating_text: String;
        rating_color: String;
        rating_obj: RatingObj;
        votes: number;
    }

    export interface Restaurant {
        R: R;
        apikey: String;
        id: String;
        name: String;
        url: String;
        location: Location2;
        switch_to_order_menu: number;
        cuisines: String;
        average_cost_for_two: number;
        price_range: number;
        currency: String;
        offers: any[];
        opentable_support: number;
        is_zomato_book_res: number;
        mezzo_provider: String;
        is_book_form_web_view: number;
        book_form_web_view_url: String;
        book_again_url: String;
        thumb: String;
        user_rating: UserRating;
        photos_url: String;
        menu_url: String;
        featured_image: String;
        has_online_delivery: number;
        is_delivering_now: number;
        store_type: String;
        include_bogo_offers: boolean;
        deeplink: String;
        is_table_reservation_supported: number;
        has_table_booking: number;
        events_url: String;
    }

    export interface NearbyRestaurant {
        restaurant: Restaurant;
    }

    export interface ZomatoInterface {
        location?: Location;
        popularity?: Popularity;
        link?: String;
        nearby_restaurants?: NearbyRestaurant[];
    }
