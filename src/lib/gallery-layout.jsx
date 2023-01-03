import { createLayout } from "./create-layout";

//
// Responsible for row-based gallery layout.
//
export function GalleryLayout({ items = [], galleryWidth = 600, targetRowHeight = 200, baseUrl = "" }) {

    const gutter = 8; // Small gutter to make sure the edge or each rows is not visible.
    const rows = createLayout(items, galleryWidth + gutter, targetRowHeight);

    return (
        <div
            style={{
                width: `${galleryWidth}px`,
                overflowX: "hidden",
            }}
            >
            {rows.map((row, rowIndex) => {
                return (
                    <div
                        key={rowIndex}
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            height: `${row.height}px`,
                        }}
                        >
                        {row.items.map(item => {
                            return (
                                <img 
                                    key={item.thumb}
                                    src={`${baseUrl}${item.thumb}`}
                                    />
                            );
                        })}
                    </div>
                );
            })}

        </div>
    );
}

