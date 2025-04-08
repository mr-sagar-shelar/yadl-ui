import type { Meta, StoryObj } from "@storybook/react";
import Dataplex from "../Dataplex";

const meta: Meta<typeof Dataplex> = { title: "GCP/Dataplex", component: Dataplex };

export default meta;
type Story = StoryObj<typeof Dataplex>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
