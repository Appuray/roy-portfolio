"use client";

import { SliceSimulator } from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";

import { components } from "../../slices";

export default function SliceSimulatorPage() {
  return (
    <SliceSimulator
      background="#131c30"
      sliceZone={(props) => <SliceZone {...props} components={components} />}
    />
  );
}
