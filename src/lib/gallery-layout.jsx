import { createLayout } from "./create-layout";

//
// Responsible for row-based gallery layout.
//
export function GalleryLayout({ 
    items = [], 
    galleryWidth = 600, 
    targetRowHeight = 150, 
    baseUrl = "",
    onImageClick = undefined
    }) {

    const gutter = 8; // Small gutter to make sure the edge or each rows is not visible.
    const rows = createLayout(items, galleryWidth + gutter, targetRowHeight);

    let prevGroup = undefined;

    return (
        <div
            style={{
                width: `${galleryWidth}px`,
                overflowX: "hidden",
            }}
            >
            {rows.map((row, rowIndex) => {
                const items = [];
                if (row.group !== prevGroup) {
                    items.push(
                        <div 
                            key={row.group}
                            style={{
                                fontSize: "0.9rem",
                                color: "rgb(60,64,67)",
                                fontWeight: 500,
                                lineHeight: "1.25rem",
                                letterSpacing: ".0178571429em",
                                padding: "1.25em",
                            }}
                            >
                            {row.group}
                        </div>
                    );
                    prevGroup = row.group;
                }
                items.push(
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
                                    style={{
                                        padding: "1px",
                                    }}
                                    onClick={() => {
                                        if (onImageClick) {
                                            onImageClick(item) 
                                        }
                                    }}
                                    key={item.thumb}
                                    src={`${baseUrl}${item.thumb}`}
                                    />
                            );
                        })}
                    </div>
                );
                return items;
            })}

        </div>
    );
}

