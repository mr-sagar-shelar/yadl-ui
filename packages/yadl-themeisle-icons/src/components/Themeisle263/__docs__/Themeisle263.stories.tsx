import type { Meta, StoryObj } from "@storybook/react";
import Themeisle263 from "../Themeisle263";

const meta: Meta<typeof Themeisle263> = { title: "Themeisle/Themeisle263", component: Themeisle263 };

export default meta;
type Story = StoryObj<typeof Themeisle263>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
