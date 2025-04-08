import type { Meta, StoryObj } from "@storybook/react";
import Themeisle353 from "../Themeisle353";

const meta: Meta<typeof Themeisle353> = { title: "Themeisle/Themeisle353", component: Themeisle353 };

export default meta;
type Story = StoryObj<typeof Themeisle353>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
