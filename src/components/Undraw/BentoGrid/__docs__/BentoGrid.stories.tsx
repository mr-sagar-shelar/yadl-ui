import type { Meta, StoryObj } from "@storybook/react";
import BentoGrid from "../BentoGrid";

const meta: Meta<typeof BentoGrid> = { title: "unDraw/BentoGrid", component: BentoGrid };

export default meta;
type Story = StoryObj<typeof BentoGrid>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
