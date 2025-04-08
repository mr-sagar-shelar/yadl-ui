import type { Meta, StoryObj } from "@storybook/react";
import DataExtraction from "../DataExtraction";

const meta: Meta<typeof DataExtraction> = { title: "unDraw/DataExtraction", component: DataExtraction };

export default meta;
type Story = StoryObj<typeof DataExtraction>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
