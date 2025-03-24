import type { Meta, StoryObj } from "@storybook/react";
import Themeisle446 from "../Themeisle446";

const meta: Meta<typeof Themeisle446> = { title: "Themeisle/Themeisle446", component: Themeisle446 };

export default meta;
type Story = StoryObj<typeof Themeisle446>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
