import type { Meta, StoryObj } from "@storybook/react";
import ChooseCard from "../ChooseCard";

const meta: Meta<typeof ChooseCard> = { title: "unDraw/ChooseCard", component: ChooseCard };

export default meta;
type Story = StoryObj<typeof ChooseCard>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
