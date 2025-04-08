import type { Meta, StoryObj } from "@storybook/react";
import Catalog from "../Catalog";

const meta: Meta<typeof Catalog> = { title: "GCP/Catalog", component: Catalog };

export default meta;
type Story = StoryObj<typeof Catalog>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
