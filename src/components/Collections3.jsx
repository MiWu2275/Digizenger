import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Collection from "./Collection";
import CustomizeCollection from "./CustomizeCollection";
import Collection1 from "./Collection1";
import Collections2 from "./Collections2";

function App() {
    const [isCollectionOpen, setCollectionOpen] = useState(false);
    const [isCustomizeCollectionOpen, setCustomizeCollectionOpen] = useState(false);
    const [isCollection1Open, setCollection1Open] = useState(false);
    const [isCollections2Open, setCollections2Open] = useState(false);

    const openModal = (modal) => {
        setCollectionOpen(modal === "collection");
        setCustomizeCollectionOpen(modal === "customizeCollection");
        setCollection1Open(modal === "collection1");
        setCollections2Open(modal === "collections2");
    };

    const closeAllModals = () => {
        setCollectionOpen(false);
        setCustomizeCollectionOpen(false);
        setCollection1Open(false);
        setCollections2Open(false);
    };

    return (
        <Router>
            <div className="App">
                {/* Trigger buttons */}
                <button onClick={() => openModal("collection")}>Open Collection</button>
                <button onClick={() => openModal("customizeCollection")}>Open Customize Collection</button>

                {/* Modal components */}
                {isCollectionOpen && (
                    <div className="modal">
                        <Collection onClose={closeAllModals} onNext={() => openModal("customizeCollection")} />
                    </div>
                )}

                {isCustomizeCollectionOpen && (
                    <div className="modal">
                        <CustomizeCollection onClose={closeAllModals} onNext={() => openModal("collection1")} />
                    </div>
                )}

                {isCollection1Open && (
                    <div className="modal">
                        <Collection1 onClose={closeAllModals} onNext={() => openModal("collections2")} />
                    </div>
                )}

                {isCollections2Open && (
                    <div className="modal">
                        <Collections2 onClose={closeAllModals} />
                    </div>
                )}

                {/* Routes for navigation if needed */}
                <Routes>
                    <Route path="/collection" element={<Collection />} />
                    <Route path="/customize-collection" element={<CustomizeCollection />} />
                    <Route path="/collection1" element={<Collection1 />} />
                    <Route path="/collections2" element={<Collections2 />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
