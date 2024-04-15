export interface result {
    page:        number;
    per_page:    number;
    total:       number;
    total_pages: number;
    data:        maid[];
    support:     Support;
}

export interface maid {
    id:         number;
    email:      string;
    first_name: string;
    last_name:  string;
    avatar:     string;
}

export interface Support {
    url:  string;
    text: string;
}
