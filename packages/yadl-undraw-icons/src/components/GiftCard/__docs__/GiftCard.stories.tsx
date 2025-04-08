import type { Meta, StoryObj } from "@storybook/react";
import GiftCard from "../GiftCard";

const meta: Meta<typeof GiftCard> = { title: "unDraw/GiftCard", component: GiftCard };

export default meta;
type Story = StoryObj<typeof GiftCard>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
