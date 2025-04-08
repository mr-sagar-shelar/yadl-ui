import type { Meta, StoryObj } from "@storybook/react";
import Themeisle294 from "../Themeisle294";

const meta: Meta<typeof Themeisle294> = { title: "Themeisle/Themeisle294", component: Themeisle294 };

export default meta;
type Story = StoryObj<typeof Themeisle294>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
