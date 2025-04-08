import type { Meta, StoryObj } from "@storybook/react";
import Datastream from "../Datastream";

const meta: Meta<typeof Datastream> = { title: "GCP/Datastream", component: Datastream };

export default meta;
type Story = StoryObj<typeof Datastream>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
