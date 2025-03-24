import type { Meta, StoryObj } from "@storybook/react";
import Themeisle453 from "../Themeisle453";

const meta: Meta<typeof Themeisle453> = { title: "Themeisle/Themeisle453", component: Themeisle453 };

export default meta;
type Story = StoryObj<typeof Themeisle453>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
