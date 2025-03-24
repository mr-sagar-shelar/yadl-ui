import type { Meta, StoryObj } from "@storybook/react";
import Themeisle410 from "../Themeisle410";

const meta: Meta<typeof Themeisle410> = { title: "Themeisle/Themeisle410", component: Themeisle410 };

export default meta;
type Story = StoryObj<typeof Themeisle410>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
