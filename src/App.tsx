import "@mdxeditor/editor/style.css";
import { useState } from "react";
import "./App.css";
import { MDXEditor } from "@mdxeditor/editor/MDXEditor";
import { toolbarPlugin } from "@mdxeditor/editor/plugins/toolbar";
import { UndoRedo } from "@mdxeditor/editor/plugins/toolbar/components/UndoRedo";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>MDXEditor bug repro</h1>
      <div className="card">
        <button onClick={() => setIsOpen(!isOpen)}>
          Editor is {isOpen ? "open" : "closed"}
        </button>
        <div>
          {isOpen && (
            <MDXEditor
              markdown="# Hello world"
              plugins={[
                toolbarPlugin({
                  toolbarContents: () => (
                    <>
                      <UndoRedo />{/* If you comment this out, the editor works */}
                    </>
                  ),
                }),
              ]}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
