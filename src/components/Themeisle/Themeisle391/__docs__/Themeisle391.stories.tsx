import type { Meta, StoryObj } from "@storybook/react";
import Themeisle391 from "../Themeisle391";

const meta: Meta<typeof Themeisle391> = { title: "Themeisle/Themeisle391", component: Themeisle391 };

export default meta;
type Story = StoryObj<typeof Themeisle391>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
