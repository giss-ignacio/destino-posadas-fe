import React from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

const Editor = () => {
  return (
    <div className="m-4 md:m-10 mt-20 md:mt-40 h-screen">
      <div className="mt-10 mb-10">
        <p className="text-lg text-gray-500">App</p>
        <p className="text-3xl font-bold">Editor</p>
      </div>
      <div>
        <div>
          <RichTextEditorComponent>
            <p>Inserte una nota</p>
            <Inject
              services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]}
            />
          </RichTextEditorComponent>
        </div>
      </div>
    </div>
  );
};
export default Editor;
