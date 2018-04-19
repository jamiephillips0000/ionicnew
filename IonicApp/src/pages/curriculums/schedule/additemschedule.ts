export class Mainsection{

    mainsectionname: string;
	subsectiondata: any;

    constructor(mainsectionname){
        this.mainsectionname = mainsectionname;
		this.subsectiondata = '';
    }
}

export class Subsection{

    subsectionname: string;

    constructor(subsectionname){
        this.subsectionname = subsectionname;
    }
}