import type { Meta, StoryObj } from "@storybook/react";
import Themeisle389 from "../Themeisle389";

const meta: Meta<typeof Themeisle389> = { title: "Themeisle/Themeisle389", component: Themeisle389 };

export default meta;
type Story = StoryObj<typeof Themeisle389>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
