export class Building{

    buildingname: string;
	floordata: any;

    constructor(buildingname){
        this.buildingname = buildingname;
		 this.floordata = '';
    }
}

export class Floor{

    floorname: string;

    constructor(floorname){
        this.floorname = floorname;
    }
}