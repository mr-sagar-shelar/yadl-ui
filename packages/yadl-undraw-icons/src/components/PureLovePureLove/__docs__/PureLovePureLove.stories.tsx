import type { Meta, StoryObj } from "@storybook/react";
import PureLovePureLove from "../PureLovePureLove";

const meta: Meta<typeof PureLovePureLove> = { title: "unDraw/PureLovePureLove", component: PureLovePureLove };

export default meta;
type Story = StoryObj<typeof PureLovePureLove>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
