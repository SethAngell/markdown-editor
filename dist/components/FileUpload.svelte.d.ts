import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        fileUploadCallback: Function;
    };
    events: {
        upload: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FileUploadProps = typeof __propDef.props;
export type FileUploadEvents = typeof __propDef.events;
export type FileUploadSlots = typeof __propDef.slots;
export default class FileUpload extends SvelteComponentTyped<FileUploadProps, FileUploadEvents, FileUploadSlots> {
}
export {};
