import type { Meta, StoryObj } from "@storybook/react";
import NatureBenefits from "../NatureBenefits";

const meta: Meta<typeof NatureBenefits> = { title: "unDraw/NatureBenefits", component: NatureBenefits };

export default meta;
type Story = StoryObj<typeof NatureBenefits>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
