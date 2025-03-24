import type { Meta, StoryObj } from "@storybook/react";
import Themeisle393 from "../Themeisle393";

const meta: Meta<typeof Themeisle393> = { title: "Themeisle/Themeisle393", component: Themeisle393 };

export default meta;
type Story = StoryObj<typeof Themeisle393>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
