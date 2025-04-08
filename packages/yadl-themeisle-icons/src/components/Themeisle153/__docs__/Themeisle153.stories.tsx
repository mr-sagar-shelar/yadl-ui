import type { Meta, StoryObj } from "@storybook/react";
import Themeisle153 from "../Themeisle153";

const meta: Meta<typeof Themeisle153> = { title: "Themeisle/Themeisle153", component: Themeisle153 };

export default meta;
type Story = StoryObj<typeof Themeisle153>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
