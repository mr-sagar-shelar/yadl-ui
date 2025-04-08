import type { Meta, StoryObj } from "@storybook/react";
import Themeisle226 from "../Themeisle226";

const meta: Meta<typeof Themeisle226> = { title: "Themeisle/Themeisle226", component: Themeisle226 };

export default meta;
type Story = StoryObj<typeof Themeisle226>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
