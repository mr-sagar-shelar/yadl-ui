import type { Meta, StoryObj } from "@storybook/react";
import Themeisle237 from "../Themeisle237";

const meta: Meta<typeof Themeisle237> = { title: "Themeisle/Themeisle237", component: Themeisle237 };

export default meta;
type Story = StoryObj<typeof Themeisle237>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
