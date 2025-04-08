import type { Meta, StoryObj } from "@storybook/react";
import DataPoints from "../DataPoints";

const meta: Meta<typeof DataPoints> = { title: "unDraw/DataPoints", component: DataPoints };

export default meta;
type Story = StoryObj<typeof DataPoints>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
