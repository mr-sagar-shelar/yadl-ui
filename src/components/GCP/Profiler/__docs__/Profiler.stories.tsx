import type { Meta, StoryObj } from "@storybook/react";
import Profiler from "../Profiler";

const meta: Meta<typeof Profiler> = { title: "GCP/Profiler", component: Profiler };

export default meta;
type Story = StoryObj<typeof Profiler>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
