import type { Meta, StoryObj } from "@storybook/react";
import Eventarc from "../Eventarc";

const meta: Meta<typeof Eventarc> = { title: "GCP/Eventarc", component: Eventarc };

export default meta;
type Story = StoryObj<typeof Eventarc>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
