import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        initialContent?: string;
        fileUploadCallback: (file: File) => Promise<URL>;
        photoCollection?: URL[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MarkdownEditorProps = typeof __propDef.props;
export type MarkdownEditorEvents = typeof __propDef.events;
export type MarkdownEditorSlots = typeof __propDef.slots;
export default class MarkdownEditor extends SvelteComponentTyped<MarkdownEditorProps, MarkdownEditorEvents, MarkdownEditorSlots> {
}
export {};
