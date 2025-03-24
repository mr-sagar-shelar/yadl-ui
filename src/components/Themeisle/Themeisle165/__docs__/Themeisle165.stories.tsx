import type { Meta, StoryObj } from "@storybook/react";
import Themeisle165 from "../Themeisle165";

const meta: Meta<typeof Themeisle165> = { title: "Themeisle/Themeisle165", component: Themeisle165 };

export default meta;
type Story = StoryObj<typeof Themeisle165>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
