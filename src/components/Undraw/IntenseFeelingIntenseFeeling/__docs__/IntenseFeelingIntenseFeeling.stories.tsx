import type { Meta, StoryObj } from "@storybook/react";
import IntenseFeelingIntenseFeeling from "../IntenseFeelingIntenseFeeling";

const meta: Meta<typeof IntenseFeelingIntenseFeeling> = { title: "unDraw/IntenseFeelingIntenseFeeling", component: IntenseFeelingIntenseFeeling };

export default meta;
type Story = StoryObj<typeof IntenseFeelingIntenseFeeling>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
