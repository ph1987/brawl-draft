"use client";
import { useState } from "react";
import brawlers from "../data/brawlstars.json";
import Image from "next/image";

export default function Home() {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);

  const modes = [
    "gem-grab",
    "brawl-ball",
    "bounty",
    "heist",
    "hot-zone",
    "knockout",
  ];

  const filteredBrawlers = selectedMode
    ? brawlers.items
        .filter((b) => b.bestModes.includes(selectedMode))
        .sort((a, b) => a.tier - b.tier)
    : [];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "sans-serif",
        padding: "20px",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        {modes.map((mode) => (
          <button
            key={mode}
            onClick={() => setSelectedMode(mode)}
            style={{ marginRight: "10px", padding: "10px 20px" }}
          >
            <Image
              src={`/modes/${mode}.png`}
              alt={mode}
              width={35}
              height={35}
              style={{ cursor: "pointer" }}
            />
          </button>
        ))}
      </div>

      {selectedMode && (
        <div style={{ width: "650px" }}>
          {filteredBrawlers.length > 0 ? (
            <>
              <ul
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  listStyle: "none",
                  padding: 0,
                }}
              >
                {filteredBrawlers.map((b) => {
                  let borderColor;
                  switch (b.tier) {
                    case 1:
                      borderColor = "red";
                      break;
                    case 2:
                      borderColor = "purple";
                      break;
                    case 3:
                      borderColor = "yellow";
                      break;
                    case 4:
                      borderColor = "green";
                      break;
                    case 5:
                      borderColor = "blue";
                      break;
                    default:
                      borderColor = "black";
                  }
                  return (
                    <li key={b.id} style={{ flexShrink: 0 }}>
                      <Image
                        src={`/brawlers/${b.id}.png`}
                        alt={b.name}
                        width={60}
                        height={60}
                        style={{
                          border: `3px solid ${borderColor}`,
                          borderRadius: "8px",
                        }}
                      />
                    </li>
                  );
                })}
              </ul>
              {/* Legenda das tiers */}
              <div
                style={{
                  marginTop: "40px",
                  display: "flex",
									justifyContent: "space-evenly",
                  flexDirection: "row",
                  gap: "8px",
                }}
              >
                <div>
                  <span
                    style={{
                      backgroundColor: "red",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  ></span>
                  Tier S
                </div>
                <div>
                  <span
                    style={{
                      backgroundColor: "purple",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  ></span>
                  Tier A
                </div>
                <div>
                  <span
                    style={{
                      backgroundColor: "yellow",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  ></span>
                  Tier B
                </div>
                <div>
                  <span
                    style={{
                      backgroundColor: "green",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  ></span>
                  Tier C
                </div>
                <div>
                  <span
                    style={{
                      backgroundColor: "blue",
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "5px",
                    }}
                  ></span>
                  Tier D
                </div>
              </div>
            </>
          ) : (
            <p></p>
          )}
        </div>
      )}
    </div>
  );
}
