import type { Meta, StoryObj } from "@storybook/react";
import Datapol from "../Datapol";

const meta: Meta<typeof Datapol> = { title: "GCP/Datapol", component: Datapol };

export default meta;
type Story = StoryObj<typeof Datapol>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
