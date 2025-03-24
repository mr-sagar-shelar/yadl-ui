import type { Meta, StoryObj } from "@storybook/react";
import QualityTime from "../QualityTime";

const meta: Meta<typeof QualityTime> = { title: "unDraw/QualityTime", component: QualityTime };

export default meta;
type Story = StoryObj<typeof QualityTime>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
