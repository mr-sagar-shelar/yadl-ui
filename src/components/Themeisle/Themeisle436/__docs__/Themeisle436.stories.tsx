import type { Meta, StoryObj } from "@storybook/react";
import Themeisle436 from "../Themeisle436";

const meta: Meta<typeof Themeisle436> = { title: "Themeisle/Themeisle436", component: Themeisle436 };

export default meta;
type Story = StoryObj<typeof Themeisle436>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
