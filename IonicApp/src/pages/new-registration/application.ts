import { Applicant } from "./applicant";

export class Application{


    title: string;
    description : string;
    parents: Array<Applicant> = [];
    applicants: Array<Applicant> = [];
    constructor(title, description, parents, applicants){
        this.title = title;
        this.description = description;
        this.parents = parents;
        this.applicants = description;
    }



}
