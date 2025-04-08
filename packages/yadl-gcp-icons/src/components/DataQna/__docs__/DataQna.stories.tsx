import type { Meta, StoryObj } from "@storybook/react";
import DataQna from "../DataQna";

const meta: Meta<typeof DataQna> = { title: "GCP/DataQna", component: DataQna };

export default meta;
type Story = StoryObj<typeof DataQna>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
