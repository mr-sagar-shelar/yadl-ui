import type { Meta, StoryObj } from "@storybook/react";
import Themeisle73 from "../Themeisle73";

const meta: Meta<typeof Themeisle73> = { title: "Themeisle/Themeisle73", component: Themeisle73 };

export default meta;
type Story = StoryObj<typeof Themeisle73>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
