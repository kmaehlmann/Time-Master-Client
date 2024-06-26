export interface Project {
    _id: string;
    projectName: string;
    projectDescription?: string;
    tenantName: string;
    assignees?: mongoose.Types.ObjectId[];
}