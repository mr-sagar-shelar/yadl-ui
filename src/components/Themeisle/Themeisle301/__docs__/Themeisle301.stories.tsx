import type { Meta, StoryObj } from "@storybook/react";
import Themeisle301 from "../Themeisle301";

const meta: Meta<typeof Themeisle301> = { title: "Themeisle/Themeisle301", component: Themeisle301 };

export default meta;
type Story = StoryObj<typeof Themeisle301>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
